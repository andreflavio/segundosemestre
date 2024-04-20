-- 1. Crie uma função denominada fc_soma que recebe dois valores inteiros e retorna o valor resultante da soma de ambos
CREATE OR REPLACE FUNCTION fc_soma(valor1 INTEGER, valor2 INTEGER) 
RETURNS INTEGER 
LANGUAGE plpgsql
AS $$
DECLARE
  soma_result INTEGER;
BEGIN
  soma_result := valor1 + valor2;
  RETURN soma_result;
END;
$$;

-- Teste para a função fc_soma dentro de um SELECT
SELECT fc_soma(10, 20) AS soma_teste;

-- 2. Crie uma função denominada fc_maior_salario, que sem usar função agregada MAX, retorne o nome do empregado com o maior salário
CREATE OR REPLACE FUNCTION fc_maior_salario() 
RETURNS TEXT 
LANGUAGE plpgsql
AS $$
DECLARE
  nome_empregado TEXT;
  maior_salario REAL;
BEGIN
  SELECT nome, salario INTO nome_empregado, maior_salario
  FROM tbl_empregados
  ORDER BY salario DESC
  LIMIT 1;
  
  RETURN nome_empregado;
END;
$$;

-- Teste para a função fc_maior_salario
SELECT fc_maior_salario() AS nome_empregado_maior_salario;

-- 3. Crie a função fc_media_salario que retorna a média dos salários dos empregados
CREATE OR REPLACE FUNCTION fc_media_salario() 
RETURNS REAL 
LANGUAGE plpgsql
AS $$
DECLARE
  media_salario REAL;
BEGIN
  SELECT AVG(salario) INTO media_salario
  FROM tbl_empregados;
  
  RETURN media_salario;
END;
$$;

-- Teste para a função fc_media_salario
SELECT fc_media_salario() AS media_salario_empregados;

-- 4. Crie a função fc_salarios que recebe o código do empregado como parâmetro e retorne o salário, o salário acrescido de 10% e o salário reduzido em 15%
CREATE OR REPLACE FUNCTION fc_salarios(p_cod_empregado INTEGER) 
RETURNS TABLE (salario_original REAL, salario_acrescido REAL, salario_reduzido REAL) 
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY 
  SELECT salario::REAL, (salario * 1.1)::REAL, (salario * 0.85)::REAL
  FROM tbl_empregados
  WHERE cod_empregado = p_cod_empregado;
END;
$$;

-- Teste para a função fc_salarios
SELECT * FROM fc_salarios(1);

-- 5. Crie uma função denominada fc_projetos que liste o código e o nome de todos os projetos cadastrados
CREATE OR REPLACE FUNCTION fc_projetos() 
RETURNS TABLE (cod_projeto INTEGER, nome_projeto TEXT) 
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY 
  SELECT tbl_projetos.cod_projeto, tbl_projetos.nome AS nome_projeto
  FROM tbl_projetos;
END;
$$;

-- Teste para a função fc_projetos
SELECT * FROM fc_projetos();




-- 6. Crie a função fc_proj_departamento que recebe o código do departamento e mostra quantos projetos o departamento possui
CREATE OR REPLACE FUNCTION fc_proj_departamento(p_cod_departamento INTEGER) 
RETURNS INTEGER 
LANGUAGE plpgsql
AS $$
DECLARE
  total_projetos INTEGER;
BEGIN
  SELECT COUNT(*) INTO total_projetos
  FROM tbl_projetos
  WHERE cod_departamento = p_cod_departamento;
  
  RETURN total_projetos;
END;
$$;

-- Teste para a função fc_proj_departamento
SELECT fc_proj_departamento(1) AS total_projetos_departamento_1;



