
const validateRequiredFields = (fields: Record<string, any>): string[] => {
    const missingFields = Object.keys(fields).filter(field => !fields[field]);

    if (missingFields.length > 0){
        return missingFields
    }

    return []
};


export default validateRequiredFields;
