from supabase import create_client, Client
from django.conf import settings

def get_supabase_client() -> Client:
    url: str = settings.SUPABASE_URL
    key: str = settings.SUPABASE_KEY
    return create_client(url, key)

def fetch_post():
    client = get_supabase_client()
    data = client.table('posts').select('*').execute()
    return data