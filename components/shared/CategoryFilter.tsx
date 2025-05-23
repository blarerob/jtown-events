"use client"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { getAllCategories } from "@/lib/actions/category.actions";
import { ICategory } from "@/lib/database/models/category.model";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import FormControl from '@mui/material/FormControl';

const CategoryFilter = () => {
    const [categories, setCategories] = useState<ICategory[]>([]);
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        const fetchCategories = async () => {
            const categoryList = await getAllCategories();

            if (categoryList) {
                setCategories(categoryList as ICategory[]);
            }
        };

        fetchCategories();
    }, []);

    const onSelectCategory = (category: string) => {
        let newUrl = '';

        if(category && category !== 'All') {
            newUrl = formUrlQuery({
                params: searchParams.toString(),
                key: 'category',
                value: category
            })
        } else {
            newUrl = removeKeysFromQuery({
                params: searchParams.toString(),
                keysToRemove: ['category']
            })
        }

        router.push(newUrl, { scroll: false });
    }

    return (

        <Select onValueChange={(value: string) => onSelectCategory(value)}>
            <SelectTrigger className="select-field">
                <SelectValue placeholder="Category" />
            </SelectTrigger>
            <FormControl sx={{ m: 1, minWidth: 80 }}>
            <SelectContent>
                <SelectItem value="All" className="select-item p-regular-14">All</SelectItem>

                {categories.map((category) => (
                    <SelectItem value={category.name} key={category._id} className="select-item p-regular-14">
                        {category.name}
                    </SelectItem>
                ))}
            </SelectContent>
            </FormControl>
        </Select>

    )
}

export default CategoryFilter