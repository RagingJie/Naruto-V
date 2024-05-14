# 数据库管理系统（DBMS）

## SQL通用语法

1. SQL语句可以简单单行或多行书写，以分号结尾；
2. MySql数据库的SQL语句不区分大小写，关键字建议使用大写；
3. 注释

- 单行注释： -- 注释内容  或 #注释内容(MySql 特有)
- 多行注释：/*  注释内容  */

## SQL分类

- DDL（Date Definition Language）数据定义语言，用来定义数据库对象：数据库，表，列等
- DML（Date Manipulation Language）数据操作语言，用来对数据库中表的数据进行增删改
- DQL（Date Query Language）数据查询语言，用来查询数据库中表的记录（数据）
- DCL（Date Control Language）数据控制语言，用来定义数据库的访问权限和安全级别，及创建用户

## 数据库有关SQL操作

<u>**创建数据库**</u>

```sql
create database 数据库名;
create database if not exists 数据库名; 
```

**<u>查询数据库</u>**

```sql
show databases;
```

**<u>删除数据库</u>**

```sql
drop database 数据库名;
drop database if exists 数据库名; 
```

**<u>使用数据库</u>**

```sql
use 数据库名;
```

**<u>查看当前使用的数据库</u>**

```sql
select database();
```

**<u>DOS命令打开数据库</u>**

![image-20220121223450867](../../AppData/Roaming/Typora/typora-user-images/image-20220121223450867.png)

```dos
C:\Users\20459>mysql -uroot -p123456
```

## MySql

### 1、DDL

#### 1.1、查询

**查询表**

- 查询当前数据库下所有表的名称

```sql
show tables;
```

- 查询表结构

```sql
desc 表名;
```

#### 1.2、创建表

```sql
CREATE TABLE 表名 (
	字段名1  数据类型1,
    字段名2  数据类型2,
    字段名3  数据类型3,
    ...
    字段名n  数据类型n
);
```

**<u>	注意：最后一行末尾，不能加逗号</u>**

实例 ：创建tb_user表

```sql
CREATE TABLE tb_user(
	id INT,
	username VARCHAR(20),
	password VARCHAR(32)
);
```

​		**创建案例**

需求：设计一张学生表，请注重数据类型、长度的合理性

1. 编号
2. 姓名，姓名最长不超过10个汉字
3. 性别，因为取值只有两种可能，因此最多一个汉字
4. 生日，取值为年月日
5. 入学成绩，小数点后保留两位
6. 邮件地址，最大长度不超过64
7. 家庭联系方式，不一定是手机号吗，可能会出现 - 等字符
8. 学生状态（用数字表示，正常、休学、毕业...）

```sql
CREATE TABLE student(
	
	id INT,
	name VARCHAR(10),
	sex CHAR(1),
	birthday DATE,
	score DOUBLE(5,2),
	email VARCHAR(64),
	tel VARCHAR(15),
	status TINYINT
	
);
```

#### 1.3、数据类型

![image-20220122151403408](../../AppData/Roaming/Typora/typora-user-images/image-20220122151403408.png)

#### 1.4、删除表

##### 1.4.1、删除表

```sql
DROP TABLE 表名;
```

##### 1.4.2、删除表时判断表是否存在

```sql
DROP TABLE IF EXISTS 表名；
```

#### 1.5修改表

##### 1.5.1、修改表名

```sql
ALTER TABLE 表名 RENAME TO 新表名;
```

##### 1.5.2、添加一列

```sql
ALTER TABLE 表名 ADD 列名 数据类型;
```

##### 1.5.3、修改数据类型

```sql
ALTER TABLE 表名 MODIFY 列名 新数据类型;
```

##### 1.5.4、修改列名和数据类型

```sql
ALTER TABLE 表名 CHANGE 列名 新列名 新数据类型;
```

##### 1.5.5、删除列

```sql
ALTER TABLE 表名 DROP 列名;
```

### 2、DML

#### 2.1、添加数据

##### 2.1.1、给指定列添加数据

```sql
INSERT INTO 表名(列名1,列名2,...) VALUES(值1,值2,...);
```

##### 2.1.2、给全部列添加数据

```sql
INSERT INTO VALUES(值1,值2,...);
```

##### 2.1.3、批量添加数据

```sql
INSERT INTO 表名(列名1,列名2,...) VALUES(值1,值2,...),(值1,值2,...),(值1,值2,...)...;
```

```sql
INSERT INTO VALUES(值1,值2,...),(值1,值2,...),(值1,值2,...)...;
```

#### 2.2、修改数据

```sql
UPDATE 表名 SET 列名1=值1,列名2=值2,...[WHERE 条件]；
```

***注重：修改语句中如果不加条件，则将所有数据都修改！***

#### 2.3、删除数据

```sql
DELETE FROM 表名 [WHERE 条件];
```

***注重：删除语句中如果不加条件，则将所有数据都修改！***

### 3、DQL

#### 3.1、基础查询

##### 3.1.1、查询多个字段

```sql
SELECT 字段列表 FROM 表名;
SELECT * FROM 表名;   --查询所有数据
```

##### 3.1.2、去除重复记录

```sql
SELECT DISTINCT 字段列表 FROM 表名;
```

##### 3.1.3、起别名

```sql
AS: AS也可以省略
```

#### 3.2、条件查询

##### 3.2.1、条件查询语法

```sql
SELECT 字段列表 FROM 表名 WHERE 条件列表;
```

##### 3.2.2、条件符号及功能

| 符号             | 功能                                   |
| ---------------- | -------------------------------------- |
| >                | 大于                                   |
| <                | 小于                                   |
| >=               | 大于等于                               |
| <=               | 小于等于                               |
| =                | 等于                                   |
| <> 或 !=         | 不等于                                 |
| BETWEEN...AND... | 在某个范围之内（都包含）               |
| IN(...)          | 多选一                                 |
| LIKE 占位符      | 模糊查询  _单个任意字符  %多个任意字符 |
| IS NULL          | 是NULL                                 |
| IS NOT NULL      | 不是NULL                               |
| AND 或 &&        | 并且                                   |
| OR 或 \|\|       | 或者                                   |
| NOT 或 !         | 非，不是                               |

#### 3.3、排序查询

##### 3.3.1、排序查询语法

```sql
SELECT 字段列表 FROM 表名 ORDER BY 排序字段名1[排列方式1], 排序字段名2[排列方式2]...;
```

##### 3.3.2、排序方式

- ASC：升序排序（默认值）
- DESC：降序排序

  ***注意：如果有多个排序条件，当前边的条件值一样时，才会根据第二条件进行排序***

#### 3.4、分组查询

##### 3.4.1、聚合函数

1. 概念

   将一列数据作为一个整体，进行纵向计算。、

2. 聚合函数的分类

| 函数名      | 功能                             |
| ----------- | -------------------------------- |
| count(列名) | 统计数量（一般选用不为null的列） |
| max(列名)   | 最大值                           |
| min(列名)   | 最小值                           |
| sum(列名)   | 求和                             |
| avg(列名)   | 平均值                           |

3. 聚合函数用法

```sql
SELECT 聚合函数名(列名) FROM 表名;

SELECT COUNT(*) FROM student;    -- *代表一行中只要有一个数据不为null，就会记录
```

***注意：null值不参与所有聚合函数运算***

##### 3.4.2、分组查询语法

```sql
SELECT 字段列表 FROM 表名 [WHERE 分组前条件限定] GROUP BY 分组字段名 [HAVING 分组后条件过滤]
```

***	注意：分组之后，查询的字段为聚合函数和分组字段，查询其他字段无任何意义***



***where*** 和 ***having***区别

- 执行时机不一样：where是分组之前进行限定，不满足where条件，则不参与分组，而having是分组之后对结果进行过滤。
- 可判断的条件不一样：where不能对聚合函数进行判断， having可以。
- 执行顺序：where > 聚合函数 > having

**练习的例子**

```sql
SELECT sex,AVG(score),COUNT(*) FROM student GROUP BY sex;
SELECT sex,AVG(score),COUNT(*) FROM student WHERE score >85 GROUP BY sex;
SELECT sex,AVG(score),COUNT(*) FROM student WHERE score >85 GROUP BY sex HAVING COUNT(*)>0;
```

#### 3.5、分页查询

##### 分页查询语法

```sql
SELECT 字段列名 FROM LIMIT 起始索引，查询条目数;
```

- 起始索引从0开始
- 计算公式：起始索引=（当前页码-1）* 每页显示的条数
- tips
  - 分页查询 limit 是MySQL数据库的方言
  - Oracle分页查询使用rownumber
  - SQL Server分页查询使用top

```sql
-- 1. 从0开始查询,查询3条数据
select * FROM student LIMIT 0,3;
-- 2. 每页显示3条数据，查询第一页数据
select * FROM student LIMIT 0,3;
-- 3. 每页显示3条数据，查询第二页数据
select * FROM student LIMIT 3,3;
-- 2. 每页显示3条数据，查询第三页数据
select * FROM student LIMIT 6,3;
```

## 数据库

### 1、约束

#### 1.1、约束的概念和分类

##### 1.1.1、约束的概念

- 约束是作用于表中列上的规则，用于限制加入表的数据
- 约束的存在保证了数据库中数据的正确性，有效性和完整性

##### 1.1.2、约束的分类

| 约束名称 | 描述                                                         | 关键字      |
| -------- | ------------------------------------------------------------ | ----------- |
| 非空约束 | 保证列中所有数据不能有null值                                 | not null    |
| 唯一约束 | 保证列中所有数据各不相同                                     | unique      |
| 主键约束 | 主键是一行数据的唯一标识，要求非空且唯一                     | primary key |
| 检查约束 | 保证列中的值满足某一条件                                     | check       |
| 默认约束 | 保证数据时，未指定值则采用默认值                             | default     |
| 外键约束 | 外键用来让两个表的数据之间建立连接，保证数据的一致性和完整性 | foreign key |

​	***Tips（提示）：MySQL不支持检查约束***

​		**练习 加深理解**

```sql
DROP TABLE IF EXISTS emp;
CREATE TABLE emp (
	id INT PRIMARY KEY auto_increment,  -- 员工id，主键且自增长
	ename VARCHAR(50) NOT NULL UNIQUE,  -- 员工姓名，非空并且唯一
	joindate DATE NOT NULL,  -- 入职日期，非空
	salary DOUBLE(7,2) NOT NULL, -- 工资，非空
	bonus DOUBLE(7,2) DEFAULT 0 -- 奖金，如果没有奖金默认为0
);

INSERT INTO emp(id,ename,joindate,salary,bonus) VALUES(1,'张三','1999-11-11',8800,5000);
INSERT INTO emp(ename,joindate,salary,bonus) VALUES('李四','1999-11-11',8800,5000);
INSERT INTO emp(ename,joindate,salary,bonus) VALUES('王五','1999-11-11',8800,5000);

DELETE FROM emp WHERE id=3;

SELECT id,ename 姓名,joindate 入职日期,salary 工资,bonus 奖金 FROM emp;
```

***Tips：<u>auto_increment</u>：当列是数字类型 并且 唯一约束***



#### 1.2、约束具体分类

##### 1.2.1、非空约束

###### 1.2.1.1、概念

- 非空约束用于保证列中所有数据不能有null值

###### 1.2.1.2、用法

- 添加约束

```sql
-- 创建表时添加非空约束
create table 表名(
	列名 数据类型 not null,
    ...
);

--建完表后添加非空约束
alter table 表名 modify 字段名 数据类型 not null;
```

- 删除约束

```sql
alter table 表名 modify 字段名 数据类型;
```



##### 1.2.2、唯一约束

###### 1.2.2.1、概念

-   唯一约束保证列中所有数据各不相同

###### 1.2.2.2、用法

- 添加约束

```sql
-- 创建表时添加唯一约束
create table 表名(
	列名 数据类型 unique [auto_increment],
    -- auto_increment:当不指定值时自动增长
    ...
);


create table 表名(
	列名 数据类型,
    ...
    [constraint] [约束名称] unique(列名)
);
```

```sql
-- 建完表后添加唯一约束
alter table 表名 modify 字段名 数据类型 unique;
```

- 删除约束

```sql
alter table 表名 drop index 字段名;
```



##### 1.2.3、主键约束

###### 1.2.3.1、概念

- 主键是一行数据的唯一标识，要求非空且唯一
- 一张表只能有一个主键

###### 1.2.3.2、用法

- 添加约束

```sql
-- 创建表时添加主键约束
create table 表名(
	列名 数据类型 primary key [auto_increment],
    -- auto_increment:当不指定值时自动增长
    ...
);


create table 表名(
	列名 数据类型,
    ...
    [constraint] [约束名称]  primary key(列名)
);
```

```sql
-- 建完表后添加主键约束
alter table 表名 add primary key(字段名);
```

- 删除约束

```sql
alter table 表名 drop primary key;
```

##### 1.2.4、默认约束

###### 1.2.4.1、概念

- 保存数据时，未指定值则采用默认值

###### 1.2.4.2、用法

- 添加约束

```sql
-- 创建表时添加默认约束
create table 表名(
	列名 数据类型 default 默认值,
    ...
);
```

```sql
-- 建完表后添加默认约束
alter table 表名 alter 列名 set default 默认值;
```

- 删除约束

```sql
alter table 表名 alter 列名 drop default;
```

##### 1.2.5、外键约束

###### 1.2.5.1、概念

-   外键用来让两个表的数据之间建立连接，保证数据的一致性和完整性

###### 1.2.5.2、用法

- 添加约束

```sql
-- 创建表时添加外键约束
create table 表名(
	列名 数据类型,
    ...
    [constraint] [外键名称] foreign key(外键列名) references 主表名(主表列名)
);
```

```sql
-- 建完表后添加默认约束
alter table 表名 add constraint 外键名称 foreign key(外键字段名称) references 主表名称(主表列名);
```

- 删除约束

```sql
alter table 表名 drop foreign key 外键名称;
```

###### 案例练习

```sql
-- 部门表
CREATE TABLE dept(
	id int PRIMARY KEY auto_increment,
	dep_name VARCHAR(20),
	address VARCHAR(20)
);
-- 员工表
CREATE TABLE emp(
	id int PRIMARY KEY auto_increment,
	name VARCHAR(20),
	age INT,
	dep_id INT,
	CONSTRAINT fk_emp_dept FOREIGN KEY(dep_id) REFERENCES dept(id)     -- 建立物理连接
);

INSERT into dept(dep_name,address) VALUES('研发部','广州'),('销售部','深圳');   -- 列名与添加的列数据要一致

SELECT * FROM dept;

INSERT INTO emp(name,age,dep_id) VALUES('张三',20,1),('李四',21,1),('王五',22,2);

SELECT * FROM emp;

-- 删除外键
ALTER TABLE emp DROP FOREIGN KEY fk_emp_dept;

-- 建完表后，添加外键
ALTER TABLE emp ADD CONSTRAINT fk_emp_dept FOREIGN KEY(dep_id) REFERENCES dept(id);
```

### 2、数据库设计

- 步骤
  - 需求分析（数据是什么？数据具有哪些属性？数据与属性的特点是什么）
  - 逻辑分析（通过ER图对数据进行逻辑建模，不需要考虑我们所选用的数据库管理系统）
  - 物理设计（根据数据库自身的特点把逻辑设计转换为物理设计）
  - 维护设计（1.对新的需求进行建表；2.表优化）

#### 2.1、表关系

- **一对多、多对多、一对一**

##### 2.1.1、一对多

- 如： 部门 和 员工
  - 一个部门对用多个员工，一个员工对应一个部门

- **实现方式：在多的一方建立外键，指向一的一方的主键**
- ![image-20220201204725599](../../AppData/Roaming/Typora/typora-user-images/image-20220201204725599.png)

##### 2.1.2、多对多

- 如：商品 和 订单
  - 一个商品对应多个订单，一个订单包含多个商品
- **实现方式：建立第三张中间表，中间表至少包含两个外键，分别关联两方主键**
- ![image-20220201205340175](../../AppData/Roaming/Typora/typora-user-images/image-20220201205340175.png)

**案例练习**

```sql
-- 订单表
CREATE TABLE tb_order(
	id int PRIMARY KEY auto_increment,
	payment DOUBLE(10,2),
	payment_type TINYINT,
	status TINYINT
);

-- 商品表
CREATE TABLE tb_goods(
	id INT PRIMARY KEY auto_increment,
	title VARCHAR(100),
	price DOUBLE(10,2)
);

-- 订单商品中间表
CREATE TABLE tb_order_gooods(
	id INT PRIMARY KEY auto_increment,
	order_id INT,
	goods_id INT,
	count INT
);

-- 建完表后，添加外键
ALTER TABLE tb_order_gooods ADD CONSTRAINT fk_order_id FOREIGN KEY(order_id) REFERENCES tb_order(id);
ALTER TABLE tb_order_gooods ADD CONSTRAINT fk_goods_id FOREIGN KEY(goods_id) REFERENCES tb_goods(id);
```

##### 2.1.3、一对一

- 如：用户 和 用户详情
- 一对一关系多用于表拆分，将一个实体中经常使用的字段放一张表，不经常使用的字段放另一张表，用于提升查询性能
- 实现方式：在任意一方加入外键，关联另一方主键，并且设置外键为唯一（unique）

![image-20220201211004489](../../AppData/Roaming/Typora/typora-user-images/image-20220201211004489.png)

![image-20220201211028178](../../AppData/Roaming/Typora/typora-user-images/image-20220201211028178.png)

### 3、多表查询

#### 3.1、简介

- 笛卡尔积：取A，B集合所有组合情况

- 多表查询：从多张表查询数据

  - 链接查询

    ![image-20220202173013725](../../AppData/Roaming/Typora/typora-user-images/image-20220202173013725.png)

    - 内连接：相当于查询A　Ｂ交集数据

    - 外连接：

      　左外链接：相当于查询Ａ表所有数据和交集部分数据

      ​	右外链接：相当于查询Ｂ表所有数据和交集部分数据

  - 子查询

#### 3.2、内连接(A∩B)

##### 3.2.1、隐式内连接

语法

```sql
select 字段列表 from 表1，表2... where 条件;
```

**练习案例**

```sql
-- 查询 emp 和 dept 的数据，emp.dep_id = dept.id
-- 隐式内连接
SELECT * FROM emp,dept WHERE emp.dep_id = dept.id;

-- 查询 emp的name，age  dept的address
SELECT emp.name,emp.age,dept.address FROM emp,dept WHERE emp.dep_id = dept.id;

-- 给表 起别名
SELECT t1.name,t1.age,t2.address FROM emp t1,dept t2 WHERE t1.dep_id = t2.id;
```

##### 3.2.2、显示内连接

语法

```sql
select 字段列表 from 表1 [inner] join 表2 on 条件;
```

**练习案例**

```sql
-- 显示内连接
SELECT * FROM emp INNER JOIN dept ON emp.dep_id = dept.id;
SELECT * FROM emp JOIN dept ON emp.dep_id = dept.id;  -- INNER 可以省略
```

#### 3.3、外连接(A∪B)

语法

```sql
-- 左外链接
SELECT 字段列表 FROM 表1 LEFT [OUTER] JOIN 表2 ON 条件;

-- 右外连接
SELECT 字段列表 FROM 表1 RIGHT [OUTER] JOIN 表2 ON 条件;
```

**练习案例**

```sql
-- 左外链接
-- 查询emp表所有数据和对应的部门信息
SELECT * FROM emp LEFT JOIN dept on emp.dep_id = dept.id;


-- 右外链接
-- 查询dept表所有数据和对应的员工信息
SELECT * FROM dept RIGHT JOIN emp on emp.dep_id = dept.id;
```

#### 3.4、子查询

##### 3.4.1、概念

- 查询中嵌套查询，称嵌套查询为子查询

##### 3.4.2、子查询根据查询结果不同，作用不同

- 单行单列：作为条件值，使用 = != > <等进行条件判断

```sql
SELECT 字段列表 FROM 表 WHERE 字段名 = (子查询);
```

- 多行单列：作为条件值，使用 in 等关键字进行条件判断

```sql
SELECT 字段列表 FROM 表 WHERE 字段名 in (子查询);
```

- 多行多列：作为虚拟表

```sql
SELECT 字段列表 FROM (子查询) WHERE 条件;
```

**练习案例**

```sql
-- 查询年龄高于张三的员工年龄
SELECT * FROM emp;

-- 1.查询张三的年龄
SELECT age FROM emp WHERE name='张三';

-- 2.查询年龄高于张三的员工信息
SELECT * FROM emp WHERE age>20;

-- 查询年龄高于张三的员工年龄
SELECT * FROM emp WHERE age>(SELECT age FROM emp WHERE name='张三');

--查询 '财务部' 和 '研发部' 所有的员工信息
SELECT * FROM emp WHERE dep_id IN (SELECT id FROM dept WHERE dep_name = '财务部' or dep_name ='研发部');

-- 查询入职年龄是大于24岁的员工信息和部门信息
SELECT * FROM (SELECT * FROM emp WHERE age>24) emp,dept WHERE emp.dep_id = dept.id;
```

### 4、事务

#### 4.1、简介

- 数据库的事务（Transaction）是一种机制、一个操作序列，包含了一组数据库操作命令
- 事务把所有的命令作为一个整体一起向系统提交或撤销操作请求，即这一组数据库命令要么同时成功，要么同时失败
- 事务是一个不可分割的工作逻辑单元

#### 4.2、事务操作（语法）

```sql
-- 开启事务
	begin;
或	start transaction;

-- 提交事务
commit;

-- 回滚事务
rollback;
```

练习案例

```sql
CREATE TABLE account(
	id int PRIMARY KEY auto_increment,
	name VARCHAR(20),
	money DOUBLE(10,2)
);

INSERT INTO account(name,money) VALUES('张三',1000),('李四',1000);

SELECT * FROM account;
UPDATE account SET money = 1000;

-- 转账操作
-- 开启事务
BEGIN;
-- 1.查询李四的余额

-- 2.李四金额 -500
UPDATE account SET money = money -500 WHERE name = '李四';

-- 出错了

-- 3.张三金额 +500
UPDATE account SET money = money +500 WHERE name = '张三';

-- 提交事务
COMMIT;
-- 回滚事务
ROLLBACK;
```

#### 4.3、事务四大特征

- 原子性（Atomicity）：事务是不可分割的最小操作单位，要么同时成功，要么同时失败
- 一致性（Consistency）：事务完成时，必须使所有的数据都保持一致状态
- 隔离性（Isolation）：多个事务之间，操作的可见性
- 持久性（Durability）：事务一旦提交或回滚，它对数据库中的数据的改变就是永久的

#### 4.4、MySQL事务默认自动提交

```sql
-- 查看事务的默认提交方式
select @@autocommit;
-- 1 自动提交    0 手动提交

-- 修改事务提交方式
set @@autocommit = 0;
```