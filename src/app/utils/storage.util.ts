export class StorageUtil{
    // Save a generic type in session storage
    public static storageSave<T>(key: string, value: T): void{
        sessionStorage.setItem(key, JSON.stringify(value))
    }
    // Read a generic type from session storage
    public static storageRead<T>(key: string): T | undefined{
        const storedValue = sessionStorage.getItem(key)
        try{
            if(storedValue)
                return JSON.parse(storedValue) as T
            return undefined
        }
        catch(e){
            sessionStorage.removeItem(key)
            return undefined
        }
    }
    // Remove a generic type in session storage
    public static storageDelete(key: string) {
        sessionStorage.removeItem(key)
    }
}
