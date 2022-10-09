

export default {
	async fetch(request,env) {
		const myheader={
			'Access-Control-Allow-Headers':'*',
			'Access-Control-Allow-Methods':'POST',
			'Access-Control-Allow-Origin':'*'
		}
		if(request.method==='OPTIONS')
		{
			return new Response('Ok',{
				headers:myheader
			})
		}
		if(request.method==='POST')
		{
		const req_data=await request.json();
		const String_data=JSON.stringify(req_data);
		const data=JSON.parse(String_data)
		const key=data.ProductId;
		const Add_data={
			id:data.ProductId,
			Name:data.ProductName,
			Price:data.ProductPrice,
			ImgUrl:`https://imageget.pk6361439.workers.dev?key=${data.ProductId}`
		}
		const send_data=JSON.stringify(Add_data);
		
		try{
           await env.productdetail.put(key,send_data)
		   return new Response('1',{
			headers:myheader
		});
		}catch{
			return new Response('0',{
				headers: myheader
			});
		}
	}
	},
};
