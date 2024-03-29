'use strict'

const ValidationContract = require('./auth/fluentValidators')
const repository = require('./adminRepository')
const md5 = require('md5')
const authService = require('./auth/auth')


exports.register = async (req, res, next) => { // METODO PARA CADASTRO DE USUARIOS ADMINISTRADORES
    console.log(req.body)
    let contract = new ValidationContract() //cadastro de usuário
    contract.hasMinLen(req.body.username, 3, 'o nome deve conter pelo menos 3 caracteres')
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
            username: req.body.username,
            email: req.body.email,
            password: md5(req.body.password + global.SALT_KEY),
            provider: req.body.provider,
            isVerified: req.body.isVerified,
            
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
        console.log(`REQ `)
        console.log(req.body)
        const admin = await repository.authenticate({
            email: req.body.email,
            password: md5(req.body.password + global.SALT_KEY)
        })
        console.log('admin')
        console.log(admin)
        if (admin == null) {
            res.status(401).send({
                status: 401,
                message: "User does not exist!",
                path: req.params
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
        // res.status(500).send({
        //     message: "Falha ao processar sua requisição!"
        // })
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