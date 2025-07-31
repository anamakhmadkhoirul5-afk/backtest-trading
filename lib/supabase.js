import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

// Client for browser-side operations
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Admin client for server-side operations with full access
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey)

// Database helper functions
export const dbHelpers = {
  // User operations
  async createUser(userData) {
    const { data, error } = await supabaseAdmin
      .from('users')
      .insert([userData])
      .select()
    
    if (error) throw error
    return data[0]
  },

  async getUserByClerkId(clerkId) {
    const { data, error } = await supabaseAdmin
      .from('users')
      .select('*')
      .eq('clerk_id', clerkId)
      .single()
    
    if (error && error.code !== 'PGRST116') throw error
    return data
  },

  async updateUser(clerkId, updates) {
    const { data, error } = await supabaseAdmin
      .from('users')
      .update(updates)
      .eq('clerk_id', clerkId)
      .select()
    
    if (error) throw error
    return data[0]
  },

  // Blog operations
  async getBlogPosts(filters = {}) {
    let query = supabase
      .from('blog_posts')
      .select(`
        *,
        blog_categories(name, slug),
        users(username, full_name)
      `)
      .eq('status', 'published')
      .order('published_at', { ascending: false })

    if (filters.category) {
      query = query.eq('category_id', filters.category)
    }

    if (filters.search) {
      query = query.or(`title.ilike.%${filters.search}%,content.ilike.%${filters.search}%`)
    }

    if (filters.limit) {
      query = query.limit(filters.limit)
    }

    const { data, error } = await query

    if (error) throw error
    return data
  },

  async getBlogPost(slug) {
    const { data, error } = await supabase
      .from('blog_posts')
      .select(`
        *,
        blog_categories(name, slug),
        users(username, full_name)
      `)
      .eq('slug', slug)
      .eq('status', 'published')
      .single()

    if (error) throw error
    return data
  },

  async getBlogComments(postId) {
    const { data, error } = await supabase
      .from('blog_comments')
      .select(`
        *,
        users(username, full_name)
      `)
      .eq('post_id', postId)
      .eq('status', 'approved')
      .order('created_at', { ascending: true })

    if (error) throw error
    return data
  },

  async createBlogComment(commentData) {
    const { data, error } = await supabase
      .from('blog_comments')
      .insert([commentData])
      .select()

    if (error) throw error
    return data[0]
  },

  async likeBlogPost(userId, postId) {
    const { data, error } = await supabase
      .from('blog_likes')
      .upsert([{ user_id: userId, post_id: postId }], { onConflict: 'user_id,post_id' })
      .select()

    if (error) throw error
    return data[0]
  },

  async unlikeBlogPost(userId, postId) {
    const { error } = await supabase
      .from('blog_likes')
      .delete()
      .eq('user_id', userId)
      .eq('post_id', postId)

    if (error) throw error
    return true
  },

  // Trading operations
  async getBacktestSessions(userId, filters = {}) {
    let query = supabase
      .from('backtest_sessions')
      .select(`
        *,
        trading_strategies(name, description)
      `)
      .eq('user_id', userId)
      .order('created_at', { ascending: false })

    if (filters.limit) {
      query = query.limit(filters.limit)
    }

    const { data, error } = await query

    if (error) throw error
    return data
  },

  async createBacktestSession(sessionData) {
    const { data, error } = await supabase
      .from('backtest_sessions')
      .insert([sessionData])
      .select()

    if (error) throw error
    return data[0]
  },

  async getTradingStrategies(filters = {}) {
    let query = supabase
      .from('trading_strategies')
      .select('*')
      .eq('is_active', true)

    if (filters.isPremium !== undefined) {
      query = query.eq('is_premium', filters.isPremium)
    }

    if (filters.strategyType) {
      query = query.eq('strategy_type', filters.strategyType)
    }

    const { data, error } = await query

    if (error) throw error
    return data
  },

  // Admin operations
  async getAllUsers(filters = {}) {
    let query = supabaseAdmin
      .from('users')
      .select('*')
      .order('created_at', { ascending: false })

    if (filters.role) {
      query = query.eq('role', filters.role)
    }

    if (filters.search) {
      query = query.or(`email.ilike.%${filters.search}%,full_name.ilike.%${filters.search}%,username.ilike.%${filters.search}%`)
    }

    const { data, error } = await query

    if (error) throw error
    return data
  },

  async getAllBlogPosts(filters = {}) {
    let query = supabaseAdmin
      .from('blog_posts')
      .select(`
        *,
        blog_categories(name, slug),
        users(username, full_name)
      `)
      .order('created_at', { ascending: false })

    if (filters.status) {
      query = query.eq('status', filters.status)
    }

    const { data, error } = await query

    if (error) throw error
    return data
  },

  async logAdminActivity(activityData) {
    const { data, error } = await supabaseAdmin
      .from('admin_activities')
      .insert([activityData])
      .select()

    if (error) throw error
    return data[0]
  }
}

export default supabase