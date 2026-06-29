import sqlite3
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent
DATABASE_PATH = BASE_DIR / "database" / "portfolio.db"
SCHEMA_PATH = BASE_DIR / "database" / "schema.sql"

def init_db():
    connection = sqlite3.connect(DATABASE_PATH)
    
    with open(SCHEMA_PATH, "r") as schema_file:
        connection.executescript(schema_file.read())

    connection.close()


if __name__ == "__main__":
    init_db()
    print("Database initialised.")