package io.exercism;

class Robot {

    private GridPosition gridPosition;
    private Orientation orientation;

    public Robot(GridPosition gridPosition, Orientation orientation) {
        this.gridPosition = gridPosition;
        this.orientation = orientation;
    }

    public Object getOrientation() {
        return orientation;
    }

    public Object getGridPosition() {
        return gridPosition;
    }

    public void turnRight() {
        switch (orientation) {
            case NORTH:
                orientation = Orientation.EAST;
                break;
            case EAST:
                orientation = Orientation.SOUTH;
                break;
            case SOUTH:
                orientation = Orientation.WEST;
                break;
            case WEST:
                orientation = Orientation.NORTH;
                break;
            default:
                throw new RuntimeException("Unknown orientation " + orientation);
        }
    }

    public void turnLeft() {
        switch (orientation) {
            case NORTH:
                orientation = Orientation.WEST;
                break;
            case EAST:
                orientation = Orientation.NORTH;
                break;
            case SOUTH:
                orientation = Orientation.EAST;
                break;
            case WEST:
                orientation = Orientation.SOUTH;
                break;
            default:
                throw new RuntimeException("Unknown orientation " + orientation);
        }
    }

    public void advance() {
        switch (orientation) {
            case EAST:
                gridPosition = new GridPosition(gridPosition.x + 1, gridPosition.y);
                break;
            case NORTH:
                gridPosition = new GridPosition(this.gridPosition.x, this.gridPosition.y + 1);
                break;
            case SOUTH:
                gridPosition = new GridPosition(this.gridPosition.x, this.gridPosition.y - 1);
                break;
            case WEST:
                gridPosition = new GridPosition(gridPosition.x - 1, gridPosition.y);
                break;
            default:
                break;

        }
    }

    public void simulate(String sequence) {
        for (char letter : sequence.toCharArray()) {
            switch (letter) {
                case 'R':
                    turnRight();
                    break;
                case 'A':
                    advance();
                    break;
                case 'L':
                    turnLeft();
                    break;
            }
        }
    }

}

enum Orientation {

    NORTH, EAST, SOUTH, WEST

}

class GridPosition {

    final int x;

    final int y;

    GridPosition(final int x, final int y) {
        this.x = x;
        this.y = y;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + x;
        result = prime * result + y;
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        } else if (obj == null || getClass() != obj.getClass()) {
            return false;
        } else if (x != ((GridPosition) obj).x || y != ((GridPosition) obj).y) {
            return false;
        } else {
            return true;
        }
    }

    @Override
    public String toString() {
        return x + " " + y;
    }

}