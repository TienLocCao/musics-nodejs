const albums = require('./../models/albums.model');

// exports.findAll = (req,res) => {
//     albumsModel.getAll((a,b)=> {console.log(a,b);});
        

// }

// exports.findAll = (req, res) => {
//     albums.getAll((err, data) => {
//       if (err)
//         res.status(500).send({
//           message:
//             err.message || "Some error occurred while retrieving tutorials."
//         });
//       else res.send({
//         data,
//         message: "success"
//       });
//     });
//   };

exports.findAll = (req, res) => {
    albums.list()
        .then(response=> {
            res.status(200).send({data: response,message: "Success!"})
        })
        .catch(err => console.log(err));
};