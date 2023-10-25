import { supabase } from './supabaseInit'

export default async function getAllPostUrl () {
	const { data } = await supabase
		.from('posts')
		.select('url')
		.eq('status', 'public')

	return data
}