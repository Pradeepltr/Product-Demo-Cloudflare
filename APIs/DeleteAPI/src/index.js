/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npx wrangler dev src/index.js` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npx wrangler publish src/index.js --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async fetch(request,env) {
		
		const myheader={
			'Access-Control-Allow-Headers':'*',
			'Access-Control-Allow-Methods':'DELETE',
			'Access-Control-Allow-Origin':'*'
		}
		if(request.method==='OPTIONS')
		{
			return new Response('ok',{
				headers:myheader
			})
		}
		if(request.method==='DELETE')
		{
			try{
       const key=new URL(request.url).searchParams.get('key')
	   await env.productdetail.delete(key)
	   await env.productimage.delete(key)
	   return new Response(1,{
		headers:myheader
	   })
	}catch(err){
		return new Response(0,{
			headers:myheader
		   })
	}
	}
		return new Response("Hello World!");
	},
};
