"""
Utility functions for post-processing
"""

import configparser
from itertools import tee
import logging
from pathlib import Path
from collections.abc import Callable, Generator
from typing import TypeAlias

CWD = Path(".generation/")
INI_FILE = CWD / "config.ini"

FileModifier: TypeAlias = Callable[[list[str]], Generator[str, None, None]]


def modify_files(
    modifiers: Generator[tuple[Path, FileModifier], None, None], subdir: Path
) -> None:
    """Modify files by applying the given modifiers."""

    logging.basicConfig(level=logging.INFO, format="[%(levelname)s] %(message)s")

    for file_path, modify_fn in modifiers:
        logging.info("Modifying %s…", file_path)

        file_path = subdir / file_path

        try:
            with open(file_path, "r", encoding="utf-8") as f:
                file_contents = f.readlines()

            with open(file_path, "w", encoding="utf-8") as f:
                for line in modify_fn(file_contents):
                    f.write(line)
        except Exception as e:  # pylint: disable=broad-exception-caught
            logging.error("Error modifying %s: %s", file_path, e)


def pairwise(iterable):
    """from `itertools` 3.10"""
    # pairwise('ABCDEFG') --> AB BC CD DE EF FG
    a, b = tee(iterable)
    next(b, None)
    return zip(a, b)


def version() -> str:
    """Get the version number for the packages from the `config.ini`."""

    config = configparser.ConfigParser()
    config.read(INI_FILE)
    return config["general"]["version"]
