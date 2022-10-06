'use strict'

const ValidationContract = require('./fluentValidators')
const repository = require('./adminRepository')
const md5 = require('md5')
const authService = require('./auth')


exports.register = async (req, res, next) => { // METODO PARA CADASTRO DE USUARIOS ADMINISTRADORES
    console.log(req.body)
    let contract = new ValidationContract() //cadastro de usuário
    contract.hasMinLen(req.body.name, 3, 'o nome deve conter pelo menos 3 caracteres')
    contract.isEmail(req.body.email, 'Email invalido')
    contract.hasMinLen(req.body.password, 3, 'a senha deve conter pelo menos 3 caracteres')

    // Se os dados forem inválidos
    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end()
        return
    }

    try {
        console.log('__TRY__')
        await repository.create({
            name: req.body.name,
            email: req.body.email,
            password: md5(req.body.password + global.SALT_KEY),
            
        })

        res.status(201).send({
            message: 'Cliente cadastrado com sucesso',
            success: true,
            error: false
        })
    } catch (e) {
        res.status(500).send({
            message: "Falha ao processar sua requisição",
            success: false,
            error: true
        })
        console.log('__CATCH__')
    }
}

exports.getProfile = async (req, res) => {
    res.status(200).send(authService.decodeToken(req.headers['authorization']))
}

exports.authenticate = async (req, res, next) => { // METODO PARA AUTENTICAÇÃO SE USUÁRIOS CADASTRADOS
    try {

        console.log('__AUTHENTICATE__TRY__1')
        console.log(`Controller - ${req.body.email}`)
        const admin = await repository.authenticate({
            email: req.body.email,
            password: md5(req.body.password + global.SALT_KEY)
        })
        console.log(admin.email)
        if (!admin) {
            res.status(404).send({
                message: 'usuario ou senha ivalido'
            })
        }
        const token = await authService.generateToken({
            ID: admin.id,
            email: admin.email,
            username: admin.username,
            provider: admin.provider,
            isVerified: admin.isVerified,
            createdAt: admin.created_at,
            updatedAt: admin.updated_at
        })

        res.status(201).send({
            token: token,

        })
    } catch (e) {
        res.status(500).send({
            message: "Falha ao processar sua requisição!"
        })
    }
}

exports.book = async (req, res, next) => {
    console.log(req.body)
    let contract = new ValidationContract()
    contract.hasMinLen(req.body.titulo, 3, 'o titulo deve conter pelo menos 3 caracteres')
    contract.hasMinLen(req.body.slug, 3, 'o slug deve conter pelo menos 3 caracteres')
    contract.hasMinLen(req.body.descricao, 3, 'a descrição deve conter pelo menos 3 caracteres')
    contract.hasMinLen(req.body.autor, 3, 'O nome do Autor deve conter pelo menos 3 caracteres')
    contract.hasMinLen(req.body.editora, 3, 'O nome da Editora deve conter pelo menos 3 caracteres')

    // Se os dados forem inválidos
    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end()
        return
    }

    try {
        console.log('try')
        console.log(req.body)

        await repository.createBook({
            titulo: req.body.titulo,
            slug: req.body.titulo,
            descricao: req.body.descricao,
            autor: req.body.autor,
            editora: req.body.editora
        })

        console.log('Livro cadastrado com sucesso')
        res.status(201).send({
            message: 'Livro cadastrado com sucesso',
            success: true
        })
    } catch (e) {
        res.status(500).send({
            error: true,
            success: false,
            message: "Falha ao processar sua requisição"
        })
        console.log('catch')

    }
}





exports.verifyToken = async (req, res, next) => {
    console.log(`${req.body.token}`)
    console.log(`${req.headers['authorization'].split(' ')[1]}`)
    const data = await authService.decodeToken(req.headers['authorization'].split(' ')[1])
    res.status(201).send(data)
}


exports.adminDefault = async (req, res, next) => {
    console.log('TRY CREATE ADMIN DEFAULT')
    try {
        
        await repository.create({
            email: 'default@admin.com',
            username: "default",
            provider: "AUTH",
            isVerified: false,
            password: md5(123456 + global.SALT_KEY),
        })

        res.status(201).send({
            message: 'Administrador criado com sucesso, <br/>você só pode criar um adm default uma unica vez ',
            
        })
        console.log('__DEFAULT__ADMIN__CREATE__SUCCESS__')
    } catch (e) {
        res.status(500).send({
            message: "Falha ao processar sua requisição",
            success: false,
            error: true
        })
        console.log('__CATCH__')
    }
}