import { HttpParams } from '@angular/common/http';

export function GenHttpParams(data: object, httpParams = new HttpParams()): Object {
  Object.keys(data)
    .filter(key => {
      const v = data[key];
      return (Array.isArray(v) || typeof v === 'string') ?
        (v.length > 0) : (v !== null && v !== undefined);
    }).forEach(key => {
      httpParams = httpParams.set(key, data[key]);
    });
  return { params: httpParams };
}