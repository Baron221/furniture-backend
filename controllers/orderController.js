const Member = require("../models/Member");
const Order = require("../models/Order");
const assert = require("assert");
const Definer = require("../lib/mistake");
const dotenv = require("dotenv");
dotenv.config();

let orderController = module.exports;

orderController.createOrder = async (req, res) => {
  try {
    console.log("POST: cont/createOrder");
    assert.ok(req.member, Definer.auth_err5);

    const order = new Order();
    const result = await order.createOrderData(req.member, req.body);
    res.json({ state: "success", data: result });
  } catch (err) {
    console.log(`Error,cont/createOrder,${err.message}`);
    res.json({ state: "fail", message: err.message });
  }
};

orderController.getMyOrders = async (req, res) => {
  try {
    console.log("GET: cont/getMyOrders");
    assert.ok(req.member, Definer.auth_err5);

    const order = new Order();
    const result = await order.getMyOrdersData(req.member, req.query);
    res.json({ state: "success", data: result });
  } catch (err) {
    console.log(`Error,cont/getMyOrders,${err.message}`);
    res.json({ state: "fail", message: err.message });
  }
};