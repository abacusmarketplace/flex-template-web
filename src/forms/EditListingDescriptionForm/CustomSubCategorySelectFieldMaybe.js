import React from 'react';
import { required } from '../../util/validators';
import { FieldSelect } from '../../components';

import css from './EditListingDescriptionForm.css';

const CustomSubCategorySelectFieldMaybe = props => {
  console.log(props);
  const { name, id, subcategories, intl } = props;
  const subCategoryLabel = intl.formatMessage({
    id: 'EditListingDescriptionForm.subCategoryLabel',
  });
  const subCategoryPlaceholder = intl.formatMessage({
    id: 'EditListingDescriptionForm.subCategoryPlaceholder',
  });
  const subCategoryRequired = required(
    intl.formatMessage({
      id: 'EditListingDescriptionForm.subCategoryRequired',
    })
  );
  return subcategories ? (
    <FieldSelect
      className={css.category}
      name={name}
      id={id}
      label={subCategoryLabel}
      validate={subCategoryRequired}
    >
      <option disabled value="">
        {subCategoryPlaceholder}
      </option>
      {subcategories.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : null;
};

export default CustomSubCategorySelectFieldMaybe;
