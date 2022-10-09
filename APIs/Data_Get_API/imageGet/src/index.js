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
		const key=new URL(request.url).searchParams.get('key');
		const file=await env.productimage.get(key)
				if(file===null)
				{
					return new Response(`object not found with filename ${key}`);
				}
				const headers = new Headers();
                file.writeHttpMetadata(headers);
               headers.set('etag', file.httpEtag);

                return new Response(file.body, {
                headers,
                    });
		
	},
};
