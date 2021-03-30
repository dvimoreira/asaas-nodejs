var asaas = require('./index.js');
asaas.settings.setAccessToken( 'YOUR_ACCESS_TOKEN');
asaas.settings.setEnvironment('homologacao') // homologacao or producao;


// asaas.customer.getAll(null,function(err, data){
// 	if(err){
// 		console.log(err);
// 		console.log('error');
// 	} else {
// 		console.log(data);
// 		console.log('success');
// 	}
// });

// asaas.customer.create({'name': 'nodejs','email':'nodejs@nodejs.com'},function(err, data){
// 	if(err){
// 		console.log(err);
// 		console.log('error');
// 	} else {
// 		console.log(data);
// 		console.log('success');
// 	}
// });

// asaas.cities.getByName('camboriu',function(err,data){
// 	if(err){
// 		console.log(err);
// 		console.log('error');
// 	} else {		
// 		console.log(data.data[0])
// 		console.log('success');
// 	}
// })

// asaas.payment.getAll({status:'OVERDUE'},function(err, data){
// 	if(err){
// 		console.log(err);
// 		console.log('error');
// 	} else {		
// 		// console.log(data)
// 		// console.log('success');
// 	}
// });