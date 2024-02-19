import './form-textarea.styles.scss';

const FormTextArea  = ({ label, ...otherProps }) => {
  return (
    <div className='group'>
      <textarea className='form-input-area' {...otherProps} />
      {label && (
        <label
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormTextArea ;
