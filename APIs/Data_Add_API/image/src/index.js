

export default {
	async fetch(request,env) {
		const key=new URL(request.url).searchParams.get('key');
		try{
            await env.productimage.put(key,request.body)
			return new Response('1',{
					status:200,
					statusText:'Ok',
					headers: {
						'Access-Control-Allow-Credentials': '*',
				        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
				        'Access-Control-Allow-Origin': '*',
				        'Access-Control-Allow-Headers': '*'
					  }
				});
		}catch{
			return new Response('0',{
					status:404,
					statusText:'bad request',
					headers: {
						'Access-Control-Allow-Credentials': '*',
				        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
				        'Access-Control-Allow-Origin': '*',
				        'Access-Control-Allow-Headers': '*'
					  }
				});
		}
	},
};
