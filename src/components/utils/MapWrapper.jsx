import React from 'react';

const MapWrapper = ({children, error, textarea}) => {
    return (
        <div className={`validate-wrapper ${error ? 'validate-wrapper-map' : ''}` }>
            {children}
            {error && (
                <div className={`validate-error ${textarea?'validate-error-textarea':''}`}>
                    {error?.message}
                </div>
            )
            }
        </div>
    );
};

const ValidateWrapper = ({children, error, textarea}) => (
    <div className={`validate-wrapper ${error ? 'validate-wrapper_error' : ''}`}>
        {children}
        {error && (
            <div className={`validate-error ${textarea?'validate-error-textarea':''}`}>
                {error?.message}
            </div>
        )}
    </div>
)

export default MapWrapper;