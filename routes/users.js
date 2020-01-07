const express = require('express');
const User = require('../model/User');

var router = express.Router();

/* GET users listing. */
router.get('/', async (req, res, next) => {
	let result = await User.findAll();
  res.send(result);
});

router.post('/', async (req, res, next) => {
	let now = Date.now();

	let result = await User.create({
	    id: 'g-' + now,
	    username: 'Jake',
	    birth: '2017-07-07',
	    createAt: now,
	    updateAt: now,
	    password: "admin1111",
	    sex: 0,
	    address: "北京市海淀区知春路56号",
	})
	res.send({data: result})
})

router.put('/', async (req, res, next) => {
	let data = await User.update(
		{birth: "2019-12-31", updateAt: Date.now()},
		{where: {id: "g-1577764776613"}}
	)
	res.send(data)
})

router.delete('/', async (req, res, next) => {
	let data = await User.destroy(
		{where: {id: "g-1577764246066"}}
	)
	res.send({data: data})
})

router.get('/remove', async (req, res, next) => {
	let data = await User.destroy()
	res.send({data: data})
})

router.post('/login', async (req, res, next) => {
	let {username, password} = req.body;
	let result = await User.findAll({where: {username, password}})
	if(result.length) {
		res.send({code: 1, msg: "登录成功", data: result})
	} else {
		res.send({code: -1, msg: "用户名或密码输入有误"})
	}
})

module.exports = router;