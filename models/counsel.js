
var mongoose = require('mongoose')

var counselSchema = new mongoose.Schema({
  counselId: {type: String, unique: true},
<<<<<<< HEAD
  doctorId: {type: mongoose.Schema.Types.ObjectId, ref: 'doctor'},
  patientId: {type: mongoose.Schema.Types.ObjectId, ref: 'patient'},
  type: Number,
  time: Date,
  status: Number,
  endTime: Date,
  topic: String,
  content: String,
  title: String,
=======
  doctorId: {type: mongoose.Schema.Types.ObjectId, ref: 'alluser'},
  patientId: {type: mongoose.Schema.Types.ObjectId, ref: 'alluser'},
  type: {type: Number, enum: [1, 2, 3, 6]}, // 咨询=1,问诊=2,咨询升级问诊=3,加急咨询=6
  time: Date,
  status: {type: Number, enum: [1, 0]}, // 进行中／关闭
  endTime: Date,
  topic: String, // 好像并不在用
  content: String, // 好像并不在用
  title: String, // 好像并不在用
>>>>>>> 893a982f9a0b6156673efff8459cea6b13fe972d
  sickTime: String,
  visited: Number,
  hospital: String,
  visitDate: Date,
  diagnosis: String,
  diagnosisPhotoUrl: [String],
  symptom: String,
  symptomPhotoUrl: [String],
<<<<<<< HEAD
  descirption: String,
  help: String,
  comment: String,
  messages: [
=======
  descirption: String, // 好像并不在用
  help: String,
  comment: String, // 好像并不在用
  messages: [ // 好像并不在用
>>>>>>> 893a982f9a0b6156673efff8459cea6b13fe972d
    {
      sender: String,
      receiver: String,
      time: Date,
      content: String
    }
  ],
  revisionInfo: {
    operationTime: Date,
    userId: String,
    userName: String,
    terminalIP: String
  }
})

<<<<<<< HEAD
var counselModel = mongoose.model('counsel', counselSchema)
=======
var CounselModel = mongoose.model('counsel', counselSchema)
>>>>>>> 893a982f9a0b6156673efff8459cea6b13fe972d

function Counsel (counsel) {
  this.counsel = counsel
}

Counsel.prototype.save = function (callback) {
  var counsel = this.counsel
<<<<<<< HEAD
  var newCounsel = new counselModel(counsel)
=======
  var newCounsel = new CounselModel(counsel)
>>>>>>> 893a982f9a0b6156673efff8459cea6b13fe972d
  newCounsel.save(function (err, counselItem) {
    if (err) {
      return callback(err)
    }
    callback(null, counselItem)
  })
}

Counsel.getOne = function (query, callback, opts, fields, populate) {
  var options = opts || {}
<<<<<<< HEAD
  var fields = fields || null
  var populate = populate || ''

  counselModel
    .findOne(query, fields, opts)
    .populate(populate)
    .exec(function (err, counselInfo) {
  if (err) {
    return callback(err)
  }
  callback(null, counselInfo)
})
=======
  var _fields = fields || null
  var _populate = populate || ''

  CounselModel
  .findOne(query, _fields, options)
  .populate(_populate)
  .exec(function (err, counselInfo) {
    if (err) {
      return callback(err)
    }
    callback(null, counselInfo)
  })
>>>>>>> 893a982f9a0b6156673efff8459cea6b13fe972d
}

Counsel.getSome = function (query, callback, opts, fields, populate) {
  var options = opts || {}
<<<<<<< HEAD
  var fields = fields || null
  var populate = populate || ''
  counselModel
    .find(query, fields, options)
    .populate(populate)
    .exec(function (err, counsels) {
  if (err) {
    return callback(err)
  }
  callback(null, counsels)
})
=======
  var _fields = fields || null
  var _populate = populate || ''
  CounselModel
  .find(query, _fields, options)
  .populate(_populate)
  .exec(function (err, counsels) {
    if (err) {
      return callback(err)
    }
    callback(null, counsels)
  })
>>>>>>> 893a982f9a0b6156673efff8459cea6b13fe972d
}

Counsel.updateOne = function (query, obj, callback, opts, populate) {
  var options = opts || {}
<<<<<<< HEAD
  var populate = populate || ''

  counselModel
    .findOneAndUpdate(query, obj, options)
    .populate(populate)
    .exec(function (err, upcounsel) {
  if (err) {
    return callback(err)
  }
  callback(null, upcounsel)
})
=======
  var _populate = populate || ''

  CounselModel
  .findOneAndUpdate(query, obj, options)
  .populate(_populate)
  .exec(function (err, upcounsel) {
    if (err) {
      return callback(err)
    }
    callback(null, upcounsel)
  })
>>>>>>> 893a982f9a0b6156673efff8459cea6b13fe972d
}

module.exports = Counsel
