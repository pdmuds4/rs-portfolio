import BaseValueObject from "@utils/abstruct/value_object";
import ValueObjectError from "@utils/exceptions/value_object";

class SbFilePathError extends ValueObjectError<string> {
    constructor(
        public error_value: string,
        public message: string
    ) {
        super(
            error_value,
            "Any",
            "SbFilePath",
            message
        );
    }
}

export default class SbFilePath extends BaseValueObject<string> {
    private readonly _bucket_name: "Works" | "Compose";

    constructor(value: string, bucket_name: "Works" | "Compose") {
        super(value);
        this._bucket_name = bucket_name;
    }


    validate(const_val: string): string {
        if (const_val.length === 0)             
            throw new SbFilePathError(const_val, "空文字です");
        
        const class_name = const_val.split('/')[0];
        if (const_val.includes('/') && class_name!="Artwork" && class_name!="Audio") 
            throw new SbFilePathError(const_val, "ComposeのクラスはArtworkかAudioである必要があります");

        return const_val;
    }

    get bucketName(): "Works" | "Compose" {
        return this._bucket_name;
    }
}