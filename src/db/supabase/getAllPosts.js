import { supabase } from './supabaseInit'

export default async function getAllPost () {
	const { data } = await supabase
	.from('posts')
	.select('id, title, url, sub_title, author, created')
	.eq('status', 'public')
	.order('created', { ascending: false })

	return data
}