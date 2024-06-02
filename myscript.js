var UidV, fnameV, mnameV, snameV, eaddV, addressV;

function readFom() {
  UidV = document.getElementById("Uid").value;
  fnameV = document.getElementById("fname").value;
  mnameV = document.getElementById("mname").value;
  snameV = document.getElementById("sname").value;
  eaddV = document.getElementById("eadd").value;
  addressV = document.getElementById("address").value;
  console.log(UidV, fnameV, mnameV, snameV, eaddV, addressV);
}

// insert

document.getElementById("insert").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + UidV)
    .set({
      Uid: UidV,
      fname: fnameV,
      mname: mnameV,
      sname: snameV,
      eadd: eaddV,
      address: addressV,
    });
  alert("Data Inserted");
  document.getElementById("Uid").value = "";
  document.getElementById("fname").value = "";
  document.getElementById("mname").value = "";
  document.getElementById("sname").value = "";
  document.getElementById("eadd").value = "";
  document.getElementById("address").value = "";
};

// read

document.getElementById("read").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + UidV)
    .on("value", function (snap) {
      document.getElementById("Uid").value = snap.val().Uid;
      document.getElementById("fname").value = snap.val().fname;
      document.getElementById("mname").value = snap.val().mname;
      document.getElementById("sname").value = snap.val().sname;
      document.getElementById("eadd").value = snap.val().eadd;
      document.getElementById("address").value = snap.val().address;
    });
};

// update

document.getElementById("update").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + UidV)
    .update({
      Uid: UidV,
      fname: fnameV,
      mname: mnameV,
      sname: snameV,
      eadd: eaddV,
      address: addressV,
    });
  alert("Data Update");
  document.getElementById("Uid").value = "";
  document.getElementById("fname").value = "";
  document.getElementById("mname").value = "";
  document.getElementById("sname").value = "";
  document.getElementById("eadd").value = "";
  document.getElementById("address").value = "";
};

// delete

document.getElementById("delete").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + UidV)
    .remove();
  alert("Data Deleted");
  document.getElementById("Uid").value = "";
  document.getElementById("fname").value = "";
  document.getElementById("mname").value = "";
  document.getElementById("sname").value = "";
  document.getElementById("eadd").value = "";
  document.getElementById("address").value = "";
};
