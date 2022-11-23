const mongoose = require("mongoose");
const { Supplier } = require("../models/supplierModel");
const { Service } = require("../models/serviceModel");

exports.create = async (data) => {
  var sup = new Supplier(data);
  return await sup.save();
};

exports.findAll = async () => {
  var sups = await Supplier.find({});
  console.log(sups);
  return sups;
};

exports.find = async (id) => {
  var sups = await Supplier.findOne({_id: id});
  return sups.name;
};
/**
 * Busca a lista de fornecedores -> OK
 * busca a lista de agendamentos para o dia e periodo em questão -> OK
 * filtra os fornecedores disponiveis
 * devolve os fornecedores disponíveis
 * @param {*} data
 * @returns
 */
exports.findAllFree = async (data) => {
  // encontra todos os fornecedores
  var sups = await Supplier.find({});

  // busca as agendamentos que dem mech com fornecedores, data e período
  const schedules = await Service.find({
    scheduled_to: data.date,
    period: data.period,
  });

  const schedulesIds = new Set(schedules.map((el) => el.suplier_id));
  const filteredSuppliers = sups.filter((el) => !schedulesIds.has(el.id));
  return filteredSuppliers
};
