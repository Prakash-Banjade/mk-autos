'use client'

import { TModel } from '@/types/model.type';
import React, { createContext, useContext, useState, ReactNode } from 'react';
import modelsData from '@/data/models.json'


// Define the type for the context value
interface ModelContextType {
    models: TModel[];
    setModels: (models: TModel[]) => void;
}

// Create the context with default values
const ModelContext = createContext<ModelContextType | undefined>(undefined);

// Create the provider component
export const ModelProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [models, setModels] = useState<TModel[]>(modelsData);

    return (
        <ModelContext.Provider value={{ models, setModels }}>
            {children}
        </ModelContext.Provider>
    );
};

// Create a custom hook to use the ModelContext
export const useModelContext = (): ModelContextType => {
    const context = useContext(ModelContext);
    if (context === undefined) {
        throw new Error('useModelContext must be used within a ModelProvider');
    }
    return context;
};
