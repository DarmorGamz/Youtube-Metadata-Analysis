/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { YoutubeAPIKey } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type YoutubeAPIKeyUpdateFormInputValues = {
    apiKey?: string;
};
export declare type YoutubeAPIKeyUpdateFormValidationValues = {
    apiKey?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type YoutubeAPIKeyUpdateFormOverridesProps = {
    YoutubeAPIKeyUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    apiKey?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type YoutubeAPIKeyUpdateFormProps = React.PropsWithChildren<{
    overrides?: YoutubeAPIKeyUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    youtubeAPIKey?: YoutubeAPIKey;
    onSubmit?: (fields: YoutubeAPIKeyUpdateFormInputValues) => YoutubeAPIKeyUpdateFormInputValues;
    onSuccess?: (fields: YoutubeAPIKeyUpdateFormInputValues) => void;
    onError?: (fields: YoutubeAPIKeyUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: YoutubeAPIKeyUpdateFormInputValues) => YoutubeAPIKeyUpdateFormInputValues;
    onValidate?: YoutubeAPIKeyUpdateFormValidationValues;
} & React.CSSProperties>;
export default function YoutubeAPIKeyUpdateForm(props: YoutubeAPIKeyUpdateFormProps): React.ReactElement;
