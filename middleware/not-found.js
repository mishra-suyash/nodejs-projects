const notFound = (req,res) => {
   res.status(404).send('Page does not Exist')
   console.log('ALERT: User was not Able to find: ',req.url);
}

module.exports = notFound