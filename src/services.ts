import axios from 'axios';
import $store from './store';

// tslint:disable-next-line: max-classes-per-file class-name
export class Endpoints {

}

// tslint:disable-next-line: max-classes-per-file class-name
export class ClaseAutenticacion {
    public usuario!: string;
    public password!: string;
    public dominio?: string;
}

// tslint:disable-next-line: max-classes-per-file class-name
export class Operaciones {
	public Login(url: string, objeto: any) {
		return axios.post(url, objeto, {
			headers: { 'Content-Type': 'application/json' },
		  });
	  }
	public Logout(url: string, objeto: any) {
		return axios.post(url, objeto, {
			headers: { 'Content-Type': 'application/json' },
		  });
	  }
	public Consultar(url: string) {
	  return axios.post(url);
	}
	public Buscar(url: string, objeto: any) {
		return axios.post(url, objeto, {
			headers: { 'Content-Type': 'application/json' },
		  });
	  }
	  public Insertar(url: string, objeto: any) {
		  return axios.post(url, objeto, {
			  headers: { 'Content-Type': 'application/json' },
			});
		}
	public Actualizar(url: string, objeto: any) {
		return axios.put(url, objeto, {
		headers: { 'Content-Type': 'application/json' },
		});
	}
	public Eliminar(url: string, objeto: any) {
	  return axios.delete(url, {
		headers: { 'Content-Type': 'application/json' },
		data: objeto,
	  });
	}
  }
