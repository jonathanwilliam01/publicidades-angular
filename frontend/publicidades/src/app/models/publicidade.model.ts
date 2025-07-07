
export interface Publicidade {
  id: number;
  titulo: string;
  descricao: string;
  imagem: string | null;
  botao_link: string | null;
  titulo_botao_link: string | null;
  sp_estado: boolean;
  mg_estado: boolean;
  rj_estado: boolean;
  dt_inicio: string; 
  dt_fim: string;
  validade: 'valida' | 'vencida';
}
