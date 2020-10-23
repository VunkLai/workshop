# Packaging Python Projects
Reference:
  - https://packaging.python.org/tutorials/packaging-projects/
  - https://medium.com/%E8%B3%87%E5%B7%A5%E7%AD%86%E8%A8%98/%E6%89%93%E5%8C%85python-module-%E5%88%B0pypi-%E4%B8%8A-aef1f73e1774


## Creating the package files
```
project/
  packages/
    __init__.py
  tests/
    __init__.py
  README.md
  setup.py
  setup.cfg (option)
```

## Creating setup.py
setup() takes several [arguments](https://packaging.python.org/tutorials/packaging-projects/#creating-setup-py).

## Creating README.md, License
- [Markdown syntax](https://guides.github.com/features/mastering-markdown/)
- [Choose an open source license](https://choosealicense.com/)

## Generating distribution archives

### Installation
```
pip install --upgrade setuptools wheel
```

### Package
```
python3 setup.py sdist bdist_wheel
```

This command should output a lot of text and once completed should generate **two** files in the `dist` directory.


```
dist/
  XXX-VERSION-py3-none-any.whl
  XXX-VERSION.tar.gz
```

The `tar.gz` file is a Source Archive whereas the `.whl` file is a Built Distribution.

Newer pip versions preferentially install built distributions, but will fall back to source archives if needed. You should always upload a source archive and provide built archives for the platforms your project is compatible with. In this case, our example package is compatible with Python on any platform so only one built distribution is needed.

## Uploading the distribution archives

### TestPyPI
```
python -m twine upload --repository-url https://test.pypi.org/legacy/ dist/*
```
Once uploaded your package should be viewable on TestPyPI.

```
python -m twine upload dist/*
```
Once uploaded your package should be viewable on PyPI.

