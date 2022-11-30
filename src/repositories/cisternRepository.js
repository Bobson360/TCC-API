"use strict";

const { Cistern } = require("../models/IOT/cisternModel");
const { Service } = require("../models/serviceModel");
const { User } = require("../models/userModel.js");
const { find } = require("../repositories/supplier-repository");
const { getDeviceCode } = require("./iotRepository")
const { findById: findUserById, findNameById: findUserNameById } = require("./userRepository")

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
  console.log(cisternId)
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
exports.getCisternaWithClientDatasController = async () => {
  let dt = [];
  const cistern = await Cistern.find()
    
     cistern.forEach(async e => {
       
        dt.push({
        id: e._id,
        clientId: e.userId,
        clientName: await findUserNameById(e.userId),
        lat: e.lat,
        lng: e.lng,
        module_code: await getDeviceCode(e.module_id),
        status: e.status
      })

  })
    return dt 
  
};

exports.deleteSchedulesRepository = async (id) => {
  return await Service.findByIdAndDelete(id)
};

exports.getSchedulesLaterController = async (id) => {
  let dt = [];
  let countDays = 0
  const date = new Date()
  const serv = await Service.find()
  serv.forEach(element => {
    var dateParts = element.scheduled_to.split("/");
    var dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
    var days = date - dateObject
    const diffInDays = days / (1000 * 60 * 60 * 24);
    console.log(parseInt(diffInDays))
    if(diffInDays > 0){
      dt.push(element)
      countDays++
    }
  });
  console.log(countDays)
  return dt
};

exports.deleteCisterByUserIdRepository = async (id) => {
  console.log("deletando cisterna")
  const cistern = await Cistern.findByIdAndDelete({userId: id})
  return cistern
};

exports.updateCistern = async (data) => {
  return await Cistern.findByIdAndUpdate(data)
};
