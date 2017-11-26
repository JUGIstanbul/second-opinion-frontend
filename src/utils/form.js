import * as fn from 'lodash';

const unitFunction = x => x;

export const control = (parent, fieldName, setter, getter) => {
  setter = setter || unitFunction;
  getter = getter || unitFunction;
  return {
    value: getter(parent.state[fieldName]),
    onChange: newValue => {
      parent.setState({
        [fieldName]: setter(newValue),
      });
    },
  };
};

export const controlParent = (parent, fieldName, setter, getter) => {
  setter = setter || unitFunction;
  getter = getter || unitFunction;
  return {
    // refSource datasi policenin icindeki bir alanda oldugu icin burada patliyor,
    // refSource un yakalanabilmesi icin ;
    // fixme: value: getter(parent.props.value.policyDetail[fieldName]),
    // olmasi gerekiyor.
    value: getter(parent.props.value[fieldName]),
    onChange: fieldValue => {
      const newValue = fn.cloneDeep(parent.props.value);
      newValue[fieldName] = setter(fieldValue);
      parent.props.onChange(newValue);
    },
  };
};

export const controlParentRename = (parent, fieldName, valueField, labelField) => {
  const setter = newValue =>
    !newValue ? null : { [valueField]: newValue.value, [labelField]: newValue.label };
  const getter = value =>
    !value ? { value: '', label: '' } : { value: value[valueField], label: value[labelField] };
  return {
    value: getter(parent.props.value[fieldName]),
    onChange: fieldValue => {
      const newValue = fn.cloneDeep(parent.props.value);
      newValue[fieldName] = setter(fieldValue);
      parent.props.onChange(newValue);
    },
  };
};
