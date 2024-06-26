\c bd_aula08
create table tbl_fornecedor (cod_fornecedor serial primary key, nome text not null, status integer, cidade text);
create table tbl_peca (cod_peca serial primary key, nome text not null, cor text, preco numeric, cidade text);
create table tbl_estoque (cod_compra serial primary key, 
						 cod_fornecedor integer references tbl_fornecedor(cod_fornecedor),
						cod_peca integer references tbl_peca(cod_peca),
						quantidade integer);
						
insert into tbl_fornecedor(nome,status,cidade) 
values ('A',30,'LONDRES'),('B',20,'PARIS'),('C',10,'PARIS'),('D',10,'LONDRES');

INSERT INTO tbl_peca(nome, cor, preco, cidade) values
('PLACA','AZUL',5,'LONDRES'),('MESA','VERMELHA',10,'PARIS'),('CADERNO','PRETA',14,'ROMA'),
('TESOURA','VERMELHA',12,'LONDRES');

INSERT INTO tbl_estoque(cod_fornecedor, cod_peca, quantidade) values
(1,1,30),(2,1,30),(3,2,10),(3,3,50);


-- 1 Listar o nome e a cidade dos fornecedores com mais de 10 peças. Contar só as peças de código 1.
SELECT f.nome, f.cidade
FROM tbl_fornecedor f
INNER JOIN tbl_estoque e ON f.cod_fornecedor = e.cod_fornecedor
WHERE e.cod_peca = 1
GROUP BY f.cod_fornecedor, f.nome, f.cidade
HAVING SUM(e.quantidade) > 10;

-- 2 Encontre o nome das peças com preço superior a 10 que estão disponíveis em estoque:
SELECT nome
FROM tbl_peca
WHERE preco > 10
AND cod_peca IN (SELECT cod_peca FROM tbl_estoque);

-- 3 Selecione o nome das peças que não estão em estoque:
SELECT nome
FROM tbl_peca
WHERE cod_peca NOT IN (SELECT cod_peca FROM tbl_estoque);


-- 4 Encontre o nome das peças que estão em estoque com uma quantidade maior que 20:
SELECT DISTINCT p.nome
FROM tbl_peca p
INNER JOIN tbl_estoque e ON p.cod_peca = e.cod_peca
WHERE e.quantidade > 20;


-- 5 Listar todas as peças exceto a PLACA, ordenado por nome:
SELECT cod_peca, nome, cor, preco, cidade
FROM tbl_peca
WHERE nome <> 'PLACA'
ORDER BY nome;


-- 6 Listar o nome e a cor das peças do fornecedor C, ordenado pelo nome da peça:
SELECT p.nome, p.cor
FROM tbl_peca p
INNER JOIN tbl_estoque e ON p.cod_peca = e.cod_peca
INNER JOIN tbl_fornecedor f ON e.cod_fornecedor = f.cod_fornecedor
WHERE f.nome = 'C'
ORDER BY p.nome;

-- 7 Listar o nome e a cor de todas as peças de Londres:
SELECT p.nome, p.cor
FROM tbl_peca p
WHERE p.cidade = 'LONDRES';

-- 8 Encontre o nome das peças que estão disponíveis em estoque em Londres e não estão disponíveis em estoque em Paris:

SELECT DISTINCT p.nome
FROM tbl_peca p
INNER JOIN tbl_estoque e ON p.cod_peca = e.cod_peca
WHERE p.cidade = 'LONDRES'
AND p.cod_peca NOT IN (
    SELECT p2.cod_peca 
    FROM tbl_peca p2
    INNER JOIN tbl_estoque e2 ON p2.cod_peca = e2.cod_peca
    WHERE p2.cidade = 'PARIS'
);

-- 9 Quais os códigos das peças que possuem maior estoque do que a peça de código 2?
SELECT DISTINCT cod_peca
FROM tbl_estoque
WHERE quantidade > (SELECT quantidade FROM tbl_estoque WHERE cod_peca = 2)
ORDER BY cod_peca;

