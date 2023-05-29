const router = require("express").Router();
const Device = require("../model/Devices");

router.get("/", async (req, res) => {
  try {
    const listaDevices = await Device.find();
    res.json({
      success: true,
      devices: listaDevices,
    });
  } catch {
    res.json({
      success: false,
      message: "Não foi posível Listar os devices!",
    });
  }
});

router.post("/", async (req, res) => {
  const novoDevice = new Device({
    nome: req.body.nome,
    kwh: req.body.kwh,
    corrente: req.body.corrente,
    voltagem: req.body.voltagem,
    fp: req.body.fp,
  });
  try {
    const saveNovoDevice = await novoDevice.save();
    res.json({
      success: true,
      message: saveNovoDevice,
    });
  } catch {
    res.json({
      success: false,
      message: "Não foi posível cadastrar o novo device",
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updateDeviceId = await Device.updateOne(
      { _id: req.params.id },
      {
        nome: req.body.nome,
        kwh: req.body.kwh,
        corrente: req.body.corrente,
        voltagem: req.body.voltagem,
        fp: req.body.fp,
      }
    );
    res.json({
      success: true,
      updated: updateDeviceId.nModified,
    });
  } catch (err) {
    res.json({
      success: false,
      message: "não foi possível atualizar o device!",
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deleteDevicesId = await Device.deleteOne({
      _id: req.params.id,
    });
    res.json({
      success: true,
      data: deleteDevicesId,
    });
  } catch (err) {
    res.json({
      success: false,
      message: "não foi possível deletar o device!",
    });
  }
});

module.exports = router;
