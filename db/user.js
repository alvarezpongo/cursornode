var records = [
  { id: 1, username: 'lolo', password: '123123', displayName: 'Lolo', emails: [ { value: 'lolo@example.com' } ] }
  , { id: 2, username: 'lili', password: '123123', displayName: 'Lili', emails: [ { value: 'lili@example.com' } ] }
];

exports.findById = function(id, cb) {
  process.nextTick(function() {
    var idx = id - 1;
    if (records[idx]) {
      cb(null, records[idx]);
    } else {
      cb(new Error('User ' + id + ' does not exist'));
    }
  });
}

exports.findByUsername = function(username, cb) {
  process.nextTick(function() {
    for (var i = 0, len = records.length; i < len; i++) {
      var record = records[i];
      if (record.username === username) {
        return cb(null, record);
      }
    }
    return cb(null, null);
  });
}
