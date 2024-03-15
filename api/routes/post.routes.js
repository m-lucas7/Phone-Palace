const express = require('express');
const router = express.Router();

router.get  ('/', (req, res) => {
    res.json({ message: 'Voici les données !' });
}),

router.post ('/', (req, res) => {
    console.log(req.body);
    res.json({ message: req.body.message });
}),

router.put ('/:id', (req, res) => {
    res.json({ messageId: req.params.id });
}),

router.delete ('/:id', (req, res) => {
    res.json({ message: 'Suppression de l\'id : ' + req.params.id });
});  

router.patch ('/phone-post/:id', (req, res) => {
    res.json({ message: 'Ajoout du téléphone à l\'id : ' + req.params.id})
});

router.patch ('/phone-delete/:id', (req, res) => {
    res.json({ message: 'Suppression du téléphone à l\'id : ' + req.params.id})
});

module.exports = router;