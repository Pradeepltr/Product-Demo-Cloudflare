

export default {
	async fetch(request,env) {
		const myheader={
			'Access-Control-Allow-Headers':'*',
			'Access-Control-Allow-Methods':'GET',
			'Access-Control-Allow-Origin':'*'
		}
		if(request.method==='OPTIONS')
		{
			return new Response('OK',{
				headers:myheader
			})

		}
		if(request.method==='GET')
		{
			var res=[]
			    const data=await env.productdetail.list();
				const StringData=JSON.stringify(data)
				const Keys=JSON.parse(StringData)
		        const id=Keys.keys;
				for(var key of id)
				{
					const SData=JSON.stringify(key)
					 const JData=JSON.parse(SData)
					 const Products=await env.productdetail.get(JData.name)
					 var ds=JSON.parse(Products)
					 var val={
                          id:ds.id,
						  Name:ds.Name,
						  Price:ds.Price,
						  ImgUrl:ds.ImgUrl
					 }
					 res.push(val)
				}
				return new Response(JSON.stringify(res),{
					headers:myheader
				})
		}
	},
};
