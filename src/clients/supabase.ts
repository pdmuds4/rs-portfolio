import { SupabaseClient } from "@supabase/supabase-js";

export default class SupabaseStorageClient extends SupabaseClient {
    constructor(url: string, key: string) {
        super(url, key);
    }

    bucket(bucket_name: string) {
        return this.storage.from(bucket_name);
    }
}