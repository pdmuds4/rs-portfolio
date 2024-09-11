import BaseValueObject from "@utils/abstruct/value_object";
import ValueObjectError from "@utils/exceptions/value_object";

class SupabasePathError extends ValueObjectError<string> {
    constructor(
        public error_value: string,
        public message: string
    ) {
        super(
            error_value,
            "Any",
            "SupabasePath",
            message
        );
    }
}

export default class SupabasePath extends BaseValueObject<string> {
    validate(const_val: string): string {
        if (const_val.length === 0)             
            throw new SupabasePathError(const_val, "空文字です");
        
        const class_name = const_val.split('/')[0];
        if (const_val.includes('/') && class_name!="Artwork" && class_name!="Audio") 
            throw new SupabasePathError(const_val, "ComposeのクラスはArtworkかAudioである必要があります");

        return const_val;
    }
}