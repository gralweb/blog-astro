import { supabase } from './supabaseInit'

export default async function getSinglePost (url) {
	const { data } = await supabase
	.from('posts')
	.select('title, sub_title, description, author, preview, background, created')
	.eq('status', 'public')
	.eq('url', url)

	return data
}