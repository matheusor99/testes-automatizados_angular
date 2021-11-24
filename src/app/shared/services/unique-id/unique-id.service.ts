import { Injectable } from "@angular/core";
import { v4 as uuidv4 } from 'uuid'

@Injectable()
export class UniqueIdService {

    private numberOfGeneratedUniqueIds = 0;

    private validId = /^[A-Za-z]+[\w\-\:\.]*$/;

    public generateUniqueIdWithPrefix(prefix: string): string {
        if (!prefix || !this.validId.test(prefix)) {
            throw Error('Prefix can not be empty');
        }
        const uniqueId = this.generateUniqueId();
        this.numberOfGeneratedUniqueIds++;
        return `${prefix}-${uniqueId}`

    }
    
    public getNumberOfGeneratedUniqueIds(): number {
        return this.numberOfGeneratedUniqueIds;
    }
    
    private generateUniqueId(): string {
        return uuidv4();
    }

}