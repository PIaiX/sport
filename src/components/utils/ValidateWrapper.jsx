import React from 'react';

const ValidateWrapper = ({children, error, textarea, className}) => (
    <div className={`validate-wrapper ${error ? 'validate-wrapper_error' : ''} ${className?className:''}`}>
        {children}
        {error && (
            <div className={`validate-error ${textarea?'validate-error-textarea':''}`}>
                {error?.message}
            </div>
        )}
    </div>
)


export default ValidateWrapper;