"use strict";

const { Cistern } = require("../models/IOT/cisternModel");
const { Service } = require("../models/serviceModel");
const { User } = require("../models/userModel.js");
const { find } = require("../repositories/supplier-repository");

exports.getCisternIdByDeviceId = async (req, res, next) => {
  console.log(req.boby.module_id);
  return await Cistern.find(req.boby.module_id);
};

exports.newSchedulingRepository = async (data) => {
  const d = { ...data };
  // const d = Date.parse(data.scheduled_to)
  d.scheduled_to = Date.parse(data.scheduled_to);
  const datas = new Service(data);
  await datas.save();
};
// {
//     id: '',
//     clientName: '',
//     date: '',
//     period: '',
//     supplier: ''
// }
exports.getSchedulesRepository = async () => {
  let dt = [];
  const data = await Service.find();
  // const cistern = await Cistern.find();
  // const usr = await User.find();
  // const cisterns = await Cistern.find()
  // const cisternsIds = new Set(data.map((el) => el.cistern_id));
  // dt.push({name:'Robson'})
  data.forEach(async (e) => {
    dt.push({
      id: e._id,
      clientName: await getUserNameByCisternId(e.cistern_id),
      date: e.scheduled_to,
      period: e.period,
      supplierName: await getSupplierNameById(e.suplier_id),
      volume: e.volume
      // console.log(Object.assign(e , {name: "Robson"}))
    });
  });
  return dt;
  // return dt
  // busca cisterna
  // busca user da cisterna
  // busca fornecedor
  // console.log(data)
};

const getUserNameByCisternId = async (cisternId) => {
  const cistern = await Cistern.findOne({ _id: cisternId });
    const usr = await User.findOne({ _id: cistern.userId });
    return usr.name;
};

const getSupplierNameById = async (supplier_Id) => {
  return await find(supplier_Id);
};

exports.getCisternByUser = async (user) => {
  return await Cistern.findOne({ userId: user });
};

exports.deleteSchedulesController = async (id) => {
  return await Service.findByIdAndDelete(id)
};
