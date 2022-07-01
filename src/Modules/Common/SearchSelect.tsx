/* eslint-disable */
import { Select, SelectProps, Spin } from "antd";
import { OmitProp } from "antd/lib/transfer/ListBody";
import { ReactNode, useCallback, useMemo, useRef, useState } from "react";
import debounce from 'lodash/debounce';
import React from "react";
export interface SearchSelectProps<valueType = any> extends Omit<SelectProps<valueType | valueType[]>, "options" | 'children'>
{
    fetchOptions:(search:string) => Promise<valueType[]>;
    timeOut?:number
}

export function SearchSelect<ValueType extends {key?:string,label:ReactNode,value:any} = any,>
({fetchOptions,timeOut=800,...props} : SearchSelectProps )
{

    const [fetching,setFetching] = useState(false);
    const [options,setOptions] = useState<ValueType[]>([]);
    const fetchRef = useRef(0);

    const fetcher = useCallback(
        debounce((value:any) =>{ 
           const _options = fetchOptions(value);
            
           setOptions(options);
            
        },
        500),[]
    )
    
    return (
        <Select
        labelInValue
        onSearch={fetcher}
        notFoundContent =  {fetching ? <Spin size ='small'/>: null}
        {...props}
        options ={options}
        filterOption= {false}
        >

        </Select>
    )

}
