export const shmoment = valueDate => {
    let result = valueDate;
    const dateChanger = {
        add(typeOfTime, valueOfTime){
            if(typeOfTime === 'years')result = new Date(result.setFullYear(result.getFullYear()+valueOfTime));
            if(typeOfTime === 'months')result = new Date(result.setMonth(result.getMonth()+valueOfTime));
            if(typeOfTime === 'days')result = new Date(result.setDate(result.getDate()+valueOfTime));
            if(typeOfTime === 'hours')result = new Date(result.setHours(result.getHours()+valueOfTime));
            if(typeOfTime === 'minutes')result = new Date(result.setMinutes(result.getMinutes()+valueOfTime));
            if(typeOfTime === 'seconds')result = new Date(result.setSeconds(result.getSeconds()+valueOfTime));
            if(typeOfTime === 'milliseconds')result = new Date(result.setMilliseconds(result.getMilliseconds()+valueOfTime));      
            // result = 
            //     typeOfTime === 'years'? new Date(result.setFullYear(result.getFullYear()+valueOfTime))
            //     : typeOfTime === 'months' ? new Date(result.setMonth(result.getMonth()+valueOfTime))
            //     : typeOfTime === 'days' ? new Date(result.setDate(result.getDate()+valueOfTime))
            //     : typeOfTime === 'hours' ? new Date(result.setHours(result.getHours()+valueOfTime))
            //     : typeOfTime === 'minutes' ? new Date(result.setMinutes(result.getMinutes()+valueOfTime))
            //     : typeOfTime === 'seconds' ? new Date(result.setSeconds(result.getSeconds()+valueOfTime))
            //     : typeOfTime === 'milliseconds' ? new Date(result.setMilliseconds(result.getMilliseconds()+valueOfTime))
            //     : null;
            
            return this;
        },
        subtract(typeOfTime, valueOfTime){
            if(typeOfTime === 'years')result = new Date(result.setFullYear(result.getFullYear()-valueOfTime));
            if(typeOfTime === 'months')result = new Date(result.setMonth(result.getMonth()-valueOfTime));
            if(typeOfTime === 'days')result = new Date(result.setDate(result.getDate()-valueOfTime));
            if(typeOfTime === 'hours')result = new Date(result.setHours(result.getHours()-valueOfTime));
            if(typeOfTime === 'minutes')result = new Date(result.setMinutes(result.getMinutes()-valueOfTime));
            if(typeOfTime === 'seconds')result = new Date(result.setSeconds(result.getSeconds()-valueOfTime));
            if(typeOfTime === 'milliseconds')result = new Date(result.setMilliseconds(result.getMilliseconds()-valueOfTime));
            // result = 
            //     typeOfTime === 'years' ? new Date(result.setFullYear(result.getFullYear()-valueOfTime))
            //     : typeOfTime === 'months'? new Date(result.setMonth(result.getMonth()-valueOfTime))
            //     : typeOfTime === 'days' ? new Date(result.setDate(result.getDate()-valueOfTime))
            //     : typeOfTime === 'hours' ? new Date(result.setHours(result.getHours()-valueOfTime))
            //     : typeOfTime === 'minutes' ? new Date(result.setMinutes(result.getMinutes()-valueOfTime))
            //     : typeOfTime === 'seconds' ? new Date(result.setSeconds(result.getSeconds()-valueOfTime))
            //     : typeOfTime === 'milliseconds' ? new Date(result.setMilliseconds(result.getMilliseconds()-valueOfTime))
            //     : null;
            
            return this;
        },
        result(){
            return result;
        }
    };
    return dateChanger;
};