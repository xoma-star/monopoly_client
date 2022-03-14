import {useEffect, useState} from "react";
import useDebounce from "./useDebounce";
import {useTypedSelector} from "./useTypedSelector";
import {useGetAllCompaniesQuery} from "../generated/graphql";

const useCompaniesSearch = (clear: Function) => {
    const [inputVal, setInputVal] = useState("")
    const [inputWithDelay, setInputWithDelay] = useState(inputVal)
    const [nameFilter, setNameFilter] = useState({
        field: 'name',
        condition: '==',
        value: inputWithDelay
    })

    //TODO: Обновить, когда выйдет React 18
    const debouncedSearch = useDebounce(inputVal, 500)
    // const inputWithDelay = useDeferredValue(value, { timeoutMs: 500 });

    useEffect(() => {
        setInputWithDelay(inputVal)
    }, [debouncedSearch])

    useEffect(() => {
        clear()
        setNameFilter({
            field: 'name',
            condition: '==',
            value: inputWithDelay
        })
    }, [inputWithDelay])
    return {inputVal, nameFilter, setInputVal}
}

const useCompanyFilters = (clear: Function) => {
    const {nameFilter, inputVal, setInputVal} = useCompaniesSearch(clear)
    const [offset, setOffset] = useState(0)
    const [filters, setFilters] = useState([nameFilter])
    const user = useTypedSelector(s => s.user)
    useEffect(() => {
        const i = filters.findIndex(x => x.field === 'name')
        let a = [...filters]
        a[i] = nameFilter
        setFilters(a)
    }, [nameFilter])
    const fastFiltersCallback = (p: string) => {
        clear()
        if(!p) setFilters([nameFilter])
        if(p === 'owned' && user.docId){setFilters([nameFilter, {field: 'owner', condition: '==', value: user.docId}])}
        setOffset(0)
    }

    return {fastFiltersCallback, filters, inputVal, setInputVal, offset, setOffset}
}

export const useCompanies = () => {
    type renderCompany = {id: string, name: string, logo: string}
    const [companiesToRender, setCompaniesToRender] = useState<renderCompany[]>([])
    const {filters, fastFiltersCallback, inputVal, setInputVal, offset, setOffset} = useCompanyFilters(() => setCompaniesToRender([]))
    const loadMore = () => {
        setOffset(offset + 50)
    }

    const {data, loading} = useGetAllCompaniesQuery({
        variables: {
            filters: filters,
            offset: offset
        }
    })

    useEffect(() => {
        setCompaniesToRender(data?.getAllCompanies ?
            [...companiesToRender, ...data?.getAllCompanies.map((v) => {return {id: v.id, name: v.name, logo: v.logo}})] :
            [...companiesToRender])
    }, [data])
    return {data, loading, fastFiltersCallback, inputVal, setInputVal, loadMore, companiesToRender}
}