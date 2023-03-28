import React, {useMemo} from 'react';
import {useFormikContext} from "formik";

interface IProps {
  name: string;
}

function InputErrorComponent({name}: IProps) {
  const {getFieldMeta} = useFormikContext();

  const meta = useMemo(() => {
    return getFieldMeta(name);
  }, [getFieldMeta, name]);

  return (
    meta.touched && meta.error ? <p className="typo-caption text-red-500">{meta.error}</p> : null
  );
}

export default InputErrorComponent;
