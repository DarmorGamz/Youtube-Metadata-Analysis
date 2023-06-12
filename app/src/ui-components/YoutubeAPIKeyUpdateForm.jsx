/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { YoutubeAPIKey } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function YoutubeAPIKeyUpdateForm(props) {
  const {
    id: idProp,
    youtubeAPIKey: youtubeAPIKeyModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    apiKey: "",
  };
  const [apiKey, setApiKey] = React.useState(initialValues.apiKey);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = youtubeAPIKeyRecord
      ? { ...initialValues, ...youtubeAPIKeyRecord }
      : initialValues;
    setApiKey(cleanValues.apiKey);
    setErrors({});
  };
  const [youtubeAPIKeyRecord, setYoutubeAPIKeyRecord] = React.useState(
    youtubeAPIKeyModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(YoutubeAPIKey, idProp)
        : youtubeAPIKeyModelProp;
      setYoutubeAPIKeyRecord(record);
    };
    queryData();
  }, [idProp, youtubeAPIKeyModelProp]);
  React.useEffect(resetStateValues, [youtubeAPIKeyRecord]);
  const validations = {
    apiKey: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          apiKey,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            YoutubeAPIKey.copyOf(youtubeAPIKeyRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "YoutubeAPIKeyUpdateForm")}
      {...rest}
    >
      <TextField
        label="Api key"
        isRequired={true}
        isReadOnly={false}
        value={apiKey}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              apiKey: value,
            };
            const result = onChange(modelFields);
            value = result?.apiKey ?? value;
          }
          if (errors.apiKey?.hasError) {
            runValidationTasks("apiKey", value);
          }
          setApiKey(value);
        }}
        onBlur={() => runValidationTasks("apiKey", apiKey)}
        errorMessage={errors.apiKey?.errorMessage}
        hasError={errors.apiKey?.hasError}
        {...getOverrideProps(overrides, "apiKey")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || youtubeAPIKeyModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || youtubeAPIKeyModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
