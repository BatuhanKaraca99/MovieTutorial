﻿namespace MovieTutorial.Web.Administration {
    export interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }

    export namespace LanguageRow {
        export const idProperty = 'Id';
        export const nameProperty = 'LanguageName';
        export const localTextPrefix = 'Administration.Language';
        export const lookupKey = 'Web.Administration.Language';

        export function getLookup(): Q.Lookup<LanguageRow> {
            return Q.getLookup<LanguageRow>('Web.Administration.Language');
        }
        export const deletePermission = 'Administration:Translation';
        export const insertPermission = 'Administration:Translation';
        export const readPermission = 'Administration:Translation';
        export const updatePermission = 'Administration:Translation';

        export declare const enum Fields {
            Id = "Id",
            LanguageId = "LanguageId",
            LanguageName = "LanguageName"
        }
    }
}
